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
  if (!invitation.hidden) return;

  invitation.hidden = false;
  window.scrollTo(0, 0);
  entry.classList.add("is-hidden");
  window.setTimeout(() => {
    entry.hidden = true;
  }, 430);
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
