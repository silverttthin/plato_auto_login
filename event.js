window.addEventListener("RUN_PNU_FUNC", (e) => {
  const type = e.detail?.type;
  if (type === "ONESTOP_SSO" && typeof ssoOpen === "function") {
    ssoOpen();
  } 
  else if (type === "CHANGE_PW" && typeof changeNextPw === "function") {
    changeNextPw();
  }
});