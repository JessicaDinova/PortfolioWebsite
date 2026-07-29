const modules = import.meta.glob("$lib/assets/doodles/skills/*.svg", {
  eager: true,
  query: "?url",
  import: "default"
});

const icons = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => {
    const name = path.split("/").pop()?.replace(".svg", "") ?? path;
    return [name, url];
  })
);

export const skills = [
    { name: "nodeJs", icon: icons.nodeJs },
    { name: "mySQL", icon: icons.mySQL },
    { name: "goLang", icon: icons.goLang },
    { name: "python", icon: icons.python },
    { name: "php", icon: icons.php },
    { name: "laravel", icon: icons.laravel },
    { name: "github", icon: icons.github },
    { name: "git", icon: icons.git },
    { name: "githubCopilot", icon: icons.githubCopilot },
    { name: "docker", icon: icons.docker },
    { name: "figma", icon: icons.figma },
    { name: "html", icon: icons.html },
    { name: "css", icon: icons.css },
    { name: "javaScript", icon: icons.javaScript },
    { name: "typeScript", icon: icons.typeScript },
    { name: "svelte", icon: icons.svelte },
    { name: "angular", icon: icons.angular },
    { name: "react", icon: icons.react },
    { name: "tailwind", icon: icons.tailwind },
    { name: "sass", icon: icons.sass },
    { name: "photoShop", icon: icons.photoShop },
    { name: "canva", icon: icons.canva },
    { name: "claude", icon: icons.claude }
];