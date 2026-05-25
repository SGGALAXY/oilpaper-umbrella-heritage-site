const archiveImages = [
  {
    title: "01 选竹",
    image: "assets/images/process/select-bamboo.webp",
    alt: "匠人挑选竹条并检查竹材纹理",
    text: "选竹阶段关注竹材的直度、韧性、竹节和纤维状态，是伞骨质量的起点。"
  },
  {
    title: "02 制骨",
    image: "assets/images/process/make-ribs.webp",
    alt: "匠人用手工工具削制竹制伞骨",
    text: "制骨把竹材削成稳定均匀的伞骨，厚薄、孔位和边缘都会影响开合手感。"
  },
  {
    title: "03 穿线",
    image: "assets/images/process/thread-ribs.webp",
    alt: "匠人用棉线穿接竹制伞骨",
    text: "棉线把伞骨连接成整体结构，松紧决定伞面的张力和弧度。"
  },
  {
    title: "04 裱面",
    image: "assets/images/process/paste-canopy.webp",
    alt: "匠人把手工纸裱贴到竹骨伞架上",
    text: "裱面让纸与竹骨贴合，纸面平整度会影响绘花和上油后的最终观感。"
  },
  {
    title: "05 绘花",
    image: "assets/images/process/paint-pattern.webp",
    alt: "匠人在油纸伞伞面上绘制梅花和竹叶纹样",
    text: "绘花让油纸伞进入礼俗与审美层面，花鸟山水常承载祝福寓意。"
  },
  {
    title: "06 上油",
    image: "assets/images/process/oil-finish.webp",
    alt: "匠人用刷子为油纸伞伞面刷上桐油",
    text: "桐油处理让纸面形成防水层，也带来油纸伞独有的温润光泽。"
  }
];

const defaultMessages = [
  {
    name: "林同学",
    role: "课程学习展示",
    text: "这一版更像档案馆，六张工序图能看清楚材料和动作。"
  },
  {
    name: "阿青",
    role: "喜欢传统手工艺",
    text: "没有普通卡片堆叠后，纸张、细线和编号的感觉更高级。"
  },
  {
    name: "访客",
    role: "第一次了解",
    text: "以前只觉得油纸伞好看，现在能理解竹骨、棉线和桐油的作用。"
  }
];

const nav = document.querySelector(".archive-nav");
const progress = document.querySelector("#siteProgress");
const revealNodes = document.querySelectorAll(".reveal");
const processButtons = document.querySelectorAll(".process-jump");
const processRecords = document.querySelectorAll(".process-record");
const imageButtons = document.querySelectorAll("[data-archive-image]");
const imageModalElement = document.querySelector("#imageModal");
const imageModal = imageModalElement ? new bootstrap.Modal(imageModalElement) : null;
const imageModalTitle = document.querySelector("#imageModalTitle");
const imageModalPhoto = document.querySelector("#imageModalPhoto");
const imageModalText = document.querySelector("#imageModalText");
const messageForm = document.querySelector("#messageForm");
const messageWall = document.querySelector("#messageWall");
const quizOptions = document.querySelector("#quizOptions");
const quizResult = document.querySelector("#quizResult");

function updateProgress() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? scrollTop / max : 0;
  progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
  nav.classList.toggle("is-scrolled", scrollTop > 24);
}

function setupReveal() {
  if (!("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealNodes.forEach((node, index) => {
    node.style.transitionDelay = `${Math.min(index % 3, 2) * 70}ms`;
    observer.observe(node);
  });
}

function setupProcessNavigation() {
  processButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(`#${button.dataset.target}`);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      processButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.target === entry.target.id);
      });
    });
  }, { rootMargin: "-35% 0px -50% 0px", threshold: 0.01 });

  processRecords.forEach((record) => observer.observe(record));
}

function setupImageModal() {
  imageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const item = archiveImages[Number(button.dataset.archiveImage)];
      imageModalTitle.textContent = item.title;
      imageModalPhoto.src = item.image;
      imageModalPhoto.alt = item.alt;
      imageModalText.textContent = item.text;
      imageModal.show();
    });
  });
}

function renderMessages(messages) {
  messageWall.innerHTML = messages.map((item) => {
    const initial = item.name.trim().charAt(0) || "访";
    return `
      <article class="message-item">
        <div class="message-avatar" aria-hidden="true">${initial}</div>
        <div>
          <div class="message-meta">
            <strong>${escapeHtml(item.name)}</strong>
            <span>${escapeHtml(item.role)}</span>
          </div>
          <p>${escapeHtml(item.text)}</p>
        </div>
      </article>
    `;
  }).join("");
}

function setupMessageForm() {
  const messages = [...defaultMessages];
  renderMessages(messages);

  messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!messageForm.checkValidity()) {
      messageForm.classList.add("was-validated");
      return;
    }

    const nextMessage = {
      name: document.querySelector("#visitorName").value.trim(),
      role: document.querySelector("#visitorRole").value,
      text: document.querySelector("#visitorMessage").value.trim()
    };

    messages.unshift(nextMessage);
    renderMessages(messages);
    messageForm.reset();
    messageForm.classList.remove("was-validated");
  });
}

function setupQuiz() {
  quizOptions.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const isCorrect = button.dataset.answer === "true";
    quizOptions.querySelectorAll("button").forEach((item) => {
      item.classList.remove("btn-archive");
      item.classList.add("btn-line");
    });
    button.classList.remove("btn-line");
    button.classList.add("btn-archive");
    quizResult.textContent = isCorrect
      ? "答对了。桐油处理后的纸面会形成防水层，这是油纸伞能够遮雨的关键。"
      : "再想想。油纸伞名称里的“油”，主要指用于处理伞面的桐油。";
  });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);

updateProgress();
setupReveal();
setupProcessNavigation();
setupImageModal();
setupMessageForm();
setupQuiz();
