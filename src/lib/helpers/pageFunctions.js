  /**
   * Create a href link for smoothScrolling based on project name
   * @param {string} projectName name of the project
   */
  export function createLink(projectName) {
    let projectLink = projectName.replace(/\s/g, "");
    projectLink = projectLink[0].toLowerCase() + projectLink.slice(1);
    return projectLink;
  }