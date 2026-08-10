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

  /**
   * Preloads images and caches them in memory to combat flickering while using carousels
   * @param {*} sources array or array of objects that includes the images
   * @param {*} keyName extracts images from array of objects (optional)
   * @returns array of preloaded Image objects
   * @example
   * // Preload array of URLs
   * preloadImages([img1, img2, img3]);
   * 
   * // Preload from array of objects
   * preloadImages(projects, 'img');
   */
  export function preloadImages(sources, keyName = null) {
    return sources.map((source) => {
      const src = keyName ? source[keyName] : source;
      const image = new Image();
      image.src = src;
      return image;
    });
  }