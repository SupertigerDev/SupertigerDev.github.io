let currentTheme = "DARK";
    const Themes = {
      DARK: {
        titleColor: "linear-gradient(90deg, rgba(167, 255, 160, 1) 0%, rgb(160 255 207) 100%)",
        bg: "rgb(38, 38, 38)",
        primary: "rgb(167, 255, 160)",
        color: "white",
        hoverBoxColor: "rgba(255, 255, 255, 0.04)",
        selectedBoxColor: "rgba(255, 255, 255, 0.08)",
      },
      LIGHT: {
        titleColor: "linear-gradient(90deg, rgb(43 99 40) 0%, rgb(59 139 99) 100%)",
        bg: "rgb(229 229 229)",
        primary: "#0A4006",
        color: "rgba(0, 0, 0, 0.8)",
        hoverBoxColor: "rgba(0, 0, 0, 0.06)",
        selectedBoxColor: "rgba(0, 0, 0, 0.1)",
      },
    };

    function setTheme(theme) {
      const styleEl = document.createElement("style");
      styleEl.innerHTML = `
      * {
        transition: 0.2s;
      }
      `;

      document.head.appendChild(styleEl);
      Object.keys(theme).forEach((key) => {
        document.documentElement.style.setProperty(`--${key}`, theme[key]);
      });
      setTimeout(() => {
        document.head.removeChild(styleEl);
      }, 200);
    }
    setTheme(Themes.DARK);

    const baseItems = [
      {
        name: "😎 My Skills",
        items: [
          { name: "🌍 HTML & CSS" },
          { name: "🎨 SCSS" },
          { name: "💻 JavaScript & Node.js" },
          { name: "📖 React & React Native" },
          { name: "🪨 Solid.js" },
          { name: "📦 Typescript" },
          { name: "🔥 Prisma.js" },
          { name: "🔨 MongoDB & Mongoose" },
          { name: "🔌 WebSocket" },
          { name: "🚀 Express" },
        ],
      },
      {
        name: "🗃️ My Projects",
        items: [
          { name: "💭 Nerimity Chat App", href: "https://nerimity.com" },
          {
            name: "⌛ Mimiqueue",
            href: "https://github.com/Nerimity/Mimiqueue",
          },
          {
            name: "🧭 Solid Navigator",
            href: "https://github.com/SupertigerDev/solid-navigator",
          },

          {
            name: "😊 Solid Emoji Picker",
            href: "https://github.com/Nerimity/solid-emoji-picker",
          },
          {
            name: "🤖 Solid Turnstile",
            href: "https://github.com/Nerimity/solid-turnstile",
          },
          {
            name: "🗄️ Solid SortableJS",
            href: "https://github.com/Nerimity/solid-sortablejs",
          },
          {
            name: "🎮 Better In Game Chat",
            href: "https://github.com/SupertigerDev/better-in-game-chat",
          },
        ],
      },
      {
        name: "👍 What I Like",
        items: [
          { name: "🤓 Programming" },
          { name: "🔨 DIY" },
          { name: "❄️ Cold Weather" },
          { name: "🍕 Eating Pizza" },
        ],
      },
      {
        name: "👎 What I Dislike",
        items: [
          { name: "🎮 Overwatch 2" },
          { name: "🌉 Going Outside" },
          { name: "😡 Rust (Programming Language)" },
        ],
      },
      {
        name: "💬 Contact",
        items: [
          { name: "💬 Discord", copy: "cat.noir" },
          {
            name: "💬 Nerimity",
            href: "https://nerimity.com/app/profile/1289157673362825217",
          },
          { name: "🧑‍💻 GitHub", href: "https://github.com/SupertigerDev" },
          { name: "🐦 Twitter", href: "https://twitter.com/SupertigerDev" },
        ],
      },
      {
        name: "⚙️ Settings",
        items: [
          {
            name: "☀️ Toggle Dark Mode",
            onClick() {
              currentTheme = currentTheme === "DARK" ? "LIGHT" : "DARK";
              setTheme(Themes[currentTheme]);
            },
          },
        ],
      },
    ];

    const el = document.createElement("div");
    el.classList.add("container");

    showItems(el, baseItems);

    function showItems(baseEl, items, nested = false) {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemEl = document.createElement("div");
        itemEl.classList.add("item");
        if (!nested) itemEl.classList.add("base");
        if (nested) itemEl.classList.add("nested");

        const btnEl = document.createElement(
          item.href
            ? "a"
            : item.items || item.copy || item.onClick
            ? "button"
            : "div"
        );
        if (item.href) {
          btnEl.href = item.href;
          btnEl.target = "_blank";
        }
        const textEl = document.createElement("span");
        textEl.classList.add("text");
        textEl.innerText = item.name;
        btnEl.appendChild(textEl);
        btnEl.classList.add("header");
        itemEl.appendChild(btnEl);

        if (item.items) {
          const itemsContainer = document.createElement("div");
          itemsContainer.classList.add("items-outer");
          const itemsEl = document.createElement("div");
          itemsEl.classList.add("items");
          showItems(itemsEl, item.items, true);
          itemsContainer.appendChild(itemsEl);
          itemEl.appendChild(itemsContainer);
        }

        btnEl.onclick = (e) => {
          if (item.onClick) {
            item.onClick(e);
            return;
          }
          if (item.copy) {
            navigator.clipboard.writeText(item.copy);
            alert("Copied to clipboard!");
            return;
          }
          if (e.target instanceof HTMLButtonElement) {
            if (!item.items) return;
            const selected = itemEl.classList.contains("selected");
            if (selected) {
              itemEl.classList.remove("selected");
            } else {
              itemEl.classList.add("selected");
            }
          }
        };

        baseEl.appendChild(itemEl);
      }
    }

    document.body.appendChild(el);