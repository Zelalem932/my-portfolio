// Resolve asset URLs at build time without hard-coding imports
const assetUrlByPath = import.meta.glob("../assets/*", { eager: true, as: "url" });
const getAssetUrl = (fileName) => assetUrlByPath[`../assets/${fileName}`] || "";

const projects = [
  {
    id: "face-scan-attendance",
    title: "Face Scan Attendance",
    short: "Attendance, complaints & analytics dashboard",
    desc:
      "Full stack attendance and complaint system with face-scan login, admin panel and analytics.",
    tech: ["Python", "Flask", "MySQL", "face-api"],
    images: [
      "face-scan-attendance1.png",
      "face-scan-attendance2.png",
      "face-scan-attendance3.png"
    ].map(getAssetUrl).filter(Boolean),
    get image() { return this.images[0] || ""; },
    live: "",
    repo: ""
  },
  {
    id: "yeti-fashion",
    title: "Yeti Fashion (WordPress)",
    short: "E-commerce site built with WordPress & custom plugins",
    desc: "A real WordPress shop with custom theme and payment integration.",
    tech: ["PHP", "WordPress", "MySQL"],
    images: [
      "yeti-fashion.png",
      "yeti-fashion1.png",
      "yeti-fashion2.png"
    ].map(getAssetUrl).filter(Boolean),
    get image() { return this.images[0] || ""; },
    live: "https://yetifashiondesign.com.et",
    repo: ""
  },
  {
    id: "complaint-system",
    title: "Complaint Management",
    short: "Fullstack complaint tracking system",
    desc: "The Complaint Tracker App is a full-stack web application designed to manage user complaints efficiently. It allows users to submit complaints, track their status, and receive notifications. Admins can manage complaints, respond to users, and view statistics.",
    tech: ["Python", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    images: [
      "complaint-management1.png",
      "complaint-management2.png",
      "complaint-management3.png",
      "complaint-management4.png",
      "complaint-management5.png",
      "complaint-management6.png"
    ].map(getAssetUrl).filter(Boolean),
    get image() { return this.images[0] || ""; },
    live: "",
    repo: ""
  }
];

export default projects;
