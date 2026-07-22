  /**
   * Create a href link for smoothScrolling based on project name
   * @param {string} projectName name of the project
   */
  export function createLink(projectName) {
    let projectLink = projectName.replace(/\s/g, "");
    projectLink = projectLink[0].toLowerCase() + projectLink.slice(1);
    return projectLink;
  }

  /**
   * Separate text on '** **' markert into array of segments.
   * @param {string} text article text with '** **' segments
   * @returns {{text: string, highlight: boolean}[]} array of text segments
   */
  export function highlightText(text) {
    const textParts = text.split(/\*\*(.+?)\*\*/g);
    const textSegments = [];

    for (let i=0; i <textParts.length; i++) {
      const textPart = textParts[i];
      const isEvenPosition = i % 2 === 0;

      if (isEvenPosition) {
        textSegments.push({text: textPart, highlight: false});
      } else {
        textSegments.push({text: textPart, highlight: true});
      }
    }
    
    return textSegments;
  }