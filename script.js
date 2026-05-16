const app = document.getElementById("app");
const desktopGate = document.getElementById("desktopGate");
const entry = document.getElementById("entry");
const invitation = document.getElementById("invitation");

const mobileQuery = window.matchMedia("(max-width: 540px)");

function applyDeviceMode() {
  const isMobile = mobileQuery.matches;
  app.setAttribute("aria-hidden", String(!isMobile));
  desktopGate.hidden = isMobile;
}

function openInvitation() {
  if (entry.classList.contains("is-opening") || entry.hidden) return;

  invitation.hidden = false;
  window.scrollTo(0, 0);
  entry.classList.add("is-opening");
  window.setTimeout(() => {
    entry.classList.add("is-hidden");
  }, 1250);
  window.setTimeout(() => {
    entry.hidden = true;
  }, 1760);
}

entry.addEventListener("pointerdown", openInvitation, { passive: true });
entry.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openInvitation();
  }
});

mobileQuery.addEventListener("change", applyDeviceMode);
applyDeviceMode();
