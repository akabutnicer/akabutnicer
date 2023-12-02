const PROMPTS = {
  STARTING_EXPLOIT: "Cryptosmite starting, finding loose areas in the code",
  POINTS_FOUND: `Areas found: ${Math.floor(
    Math.random() * (10 * 90)
  )}, ${Math.floor(Math.random() * (10 * 90))}, ${Math.floor(
    Math.random() * (10 * 90)
  )}, ${Math.floor(Math.random() * (10 * 90))}`,
  EXPLOITING_PERMISSIONS: "Reloading chromebook permissions",
  REMOVING_ENROLLMENT_CHECKS: "Running command `rm -rf /enrollment`",
  REMOVING_POLICIES: "Removing chromebook policies",
  FINISHED_EXPLOIT:
    "Finished, press `Escape + Reload + Power` to powerwash and complete the exploit",
};

const append = (tagName) => {
  return (document.documentElement.appendChild(document.createElement(tagName)));
};

const clearSideText = () => {
  document.querySelectorAll("p:not(.keep)").forEach((e) => e.remove());
};

const timeout = async (timeout) => {
  return await new Promise((resolve) => setTimeout(resolve, timeout));
};
async function loadExploit() {
  if (navigator.userAgent.indexOf("CrOS") < 1) {
    alert("This is not supported by your device type, I highly suggest you cope with it.");
    return;
  }
  await timeout(500);
  document.querySelector(".load").disabled = true;

  const startingPrompt = append("p");
  startingPrompt.textContent = PROMPTS.STARTING_EXPLOIT;
  /*
   */
  await timeout(750);
  const pointsFound = append("p");
  pointsFound.textContent = PROMPTS.POINTS_FOUND;
  /*
   */
  await timeout(750);
  const exploitingPermissions = append("p");
  exploitingPermissions.textContent = PROMPTS.EXPLOITING_PERMISSIONS;
  /*
   */
  await timeout(750);

  const removeChecks = append("p");
  removeChecks.textContent = PROMPTS.REMOVING_ENROLLMENT_CHECKS;
  /*
   */
  await timeout(750);

  const removingPolicies = append("p");
  removingPolicies.textContent = PROMPTS.REMOVING_POLICIES;
  /*
   */
  await timeout(750);

  clearSideText();
  
  const finished = append('p');
  finished.textContent = PROMPTS.FINISHED_EXPLOIT;

  await timeout(500);
  document.querySelector('.load').disabled = false;
}



document.querySelector(".load").addEventListener("click", loadExploit);
