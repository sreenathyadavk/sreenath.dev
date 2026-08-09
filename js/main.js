/* ============================================================
   MAIN.JS — Sreenath Yadav Portfolio
   Vanilla JS: nav, mobile menu, scroll reveal, terminal typing,
   Three.js hero visual, scroll indicator, ENHANCED ANIMATIONS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------
     0. SCROLL PROGRESS BAR
     -------------------------------------------------------- */
  const progressBar = document.createElement('div');
  progressBar.classList.add('scroll-progress');
  document.body.prepend(progressBar);

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true 
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});

  /* --------------------------------------------------------
     1. HEADER SCROLL BEHAVIOUR
     -------------------------------------------------------- */
  const header = document.getElementById('site-header');
  if (header) {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          header.classList.toggle('scrolled', window.scrollY > 20);
          ticking = false;
        
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true 
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
    onScroll();
  }

  /* --------------------------------------------------------
     2. MOBILE MENU
     -------------------------------------------------------- */
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
    
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
  }

  /* --------------------------------------------------------
     3. UNIVERSAL SCROLL REVEAL (IntersectionObserver)
        Handles: .reveal, .slide-left, .slide-right, .scale-up,
                 .blur-in, .rotate-in, .stagger-cascade,
                 .text-reveal, .line-draw, .img-reveal
     -------------------------------------------------------- */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const animatedClasses = [
    '.reveal', '.slide-left', '.slide-right', '.scale-up',
    '.blur-in', '.rotate-in', '.stagger-cascade',
    '.text-reveal', '.line-draw', '.img-reveal'
  ];
  const animatedEls = document.querySelectorAll(animatedClasses.join(','));

  if (!prefersReduced && animatedEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' 
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});

    animatedEls.forEach(el => observer.observe(el));
  } else {
    animatedEls.forEach(el => el.classList.add('visible'));
  }

  /* --------------------------------------------------------
     4. WORD-BY-WORD TEXT REVEAL SETUP
        Wrap each word in a <span class="word"> with stagger
     -------------------------------------------------------- */
  document.querySelectorAll('.text-reveal').forEach(el => {
    const text = el.textContent.trim();
    const words = text.split(/\s+/);
    el.innerHTML = '';
    words.forEach((word, i) => {
      const span = document.createElement('span');
      span.classList.add('word');
      span.style.transitionDelay = (i * 0.04) + 's';
      span.textContent = word;
      el.appendChild(span);
      // Add space between words
      if (i < words.length - 1) {
        el.appendChild(document.createTextNode(' '));
      }
    
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
  
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});

  /* --------------------------------------------------------
     5. SCROLL INDICATOR FADE
     -------------------------------------------------------- */
  const scrollIndicator = document.getElementById('scroll-indicator');
  if (scrollIndicator) {
    const fadeScroll = () => {
      scrollIndicator.style.opacity = window.scrollY > 100 ? '0' : '0.8';
    };
    window.addEventListener('scroll', fadeScroll, { passive: true 
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
    fadeScroll();
  }

  /* --------------------------------------------------------
     6. PARALLAX DEPTH LAYERS
        Elements with .parallax-slow move at 0.3x scroll speed
        Elements with .parallax-fast move at 0.6x scroll speed
     -------------------------------------------------------- */
  const parallaxSlow = document.querySelectorAll('.parallax-slow');
  const parallaxFast = document.querySelectorAll('.parallax-fast');

  if (!prefersReduced && (parallaxSlow.length || parallaxFast.length)) {
    let lastScrollY = 0;
    let parallaxTicking = false;

    function updateParallax() {
      const scrollY = window.scrollY;
      parallaxSlow.forEach(el => {
        el.style.transform = `translateY(${scrollY * 0.15}px)`;
      
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
      parallaxFast.forEach(el => {
        el.style.transform = `translateY(${scrollY * -0.08}px)`;
      
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
      parallaxTicking = false;
    }

    window.addEventListener('scroll', () => {
      if (!parallaxTicking) {
        requestAnimationFrame(updateParallax);
        parallaxTicking = true;
      }
    }, { passive: true 
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
  }

  /* --------------------------------------------------------
     7. 3D TILT CARDS (mouse follow)
     -------------------------------------------------------- */
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      if (prefersReduced) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
    
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
  
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});

  /* --------------------------------------------------------
     8. MAGNETIC BUTTONS
     -------------------------------------------------------- */
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      if (prefersReduced) return;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
  
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});

  /* --------------------------------------------------------
     9. COUNT-UP ANIMATION
     -------------------------------------------------------- */
  document.querySelectorAll('.count-up').forEach(el => {
    const target = parseInt(el.dataset.target, 10) || 0;
    const duration = parseInt(el.dataset.duration, 10) || 2000;
    let hasRun = false;

    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasRun) {
          hasRun = true;
          const start = performance.now();
          function step(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            el.textContent = Math.floor(eased * target).toLocaleString();
            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          countObserver.unobserve(el);
        }
      
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
    }, { threshold: 0.5 
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});

    countObserver.observe(el);
  
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});

  /* --------------------------------------------------------
     10. TERMINAL TYPING ANIMATION
     -------------------------------------------------------- */
  const termLines = [
    { id: 'terminal-line-1', text: '$ whoami', cls: 'bone' },
    { id: 'terminal-line-2', text: 'sreenath-yadav', cls: 'muted' },
    { id: 'terminal-line-3', text: '$ cat stack.txt', cls: 'bone' },
    { id: 'terminal-line-4', text: 'java spring python vue next.js', cls: 'muted' },
    { id: 'terminal-line-5', text: '$ echo $STATUS', cls: 'bone' },
    { id: 'terminal-line-6', text: '→ open to work', cls: 'ember' },
  ];

  function typeTerminal() {
    let lineIdx = 0;
    let charIdx = 0;
    const line1El = document.getElementById('terminal-line-1');
    if (!line1El) return;

    line1El.innerHTML = '';

    function typeChar() {
      if (lineIdx >= termLines.length) return;

      const current = termLines[lineIdx];
      const el = document.getElementById(current.id);
      if (!el) return;

      if (charIdx < current.text.length) {
        el.textContent = current.text.slice(0, charIdx + 1);
        charIdx++;
        setTimeout(typeChar, 35 + Math.random() * 25);
      } else {
        lineIdx++;
        charIdx = 0;
        setTimeout(typeChar, 300);
      }
    }

    setTimeout(typeChar, 800);
  }

  typeTerminal();

  /* --------------------------------------------------------
     11. THREE.JS HERO VISUAL
     -------------------------------------------------------- */
  const canvasContainer = document.getElementById('hero-canvas-container');

  if (canvasContainer && typeof THREE !== 'undefined') {
    try {
      initHeroScene(canvasContainer);
    } catch (e) {
      console.warn('Three.js scene failed to init:', e);
      canvasContainer.innerHTML = '<div class="visual-fallback" style="background:radial-gradient(ellipse at center, rgba(249,115,22,0.06) 0%, transparent 70%);position:absolute;inset:0;"></div>';
    }
  }

  function initHeroScene(container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.inset = '0';

    // --- Floating wireframe computer monitor ---
    const monitorGroup = new THREE.Group();

    // Screen
    const screenGeo = new THREE.BoxGeometry(2.8, 1.8, 0.08);
    const screenMat = new THREE.MeshBasicMaterial({
      color: 0x111315, transparent: true, opacity: 0.9,
    
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
    const screen = new THREE.Mesh(screenGeo, screenMat);
    monitorGroup.add(screen);

    // Screen wireframe border
    const screenWire = new THREE.LineSegments(
      new THREE.EdgesGeometry(screenGeo),
      new THREE.LineBasicMaterial({ color: 0xf97316, transparent: true, opacity: 0.5 })
    );
    monitorGroup.add(screenWire);

    // Screen inner glow
    const glowGeo = new THREE.PlaneGeometry(2.6, 1.6);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xf97316, transparent: true, opacity: 0.04,
    
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.position.z = 0.05;
    monitorGroup.add(glow);

    // Fake code lines
    for (let i = 0; i < 8; i++) {
      const lineWidth = 0.4 + Math.random() * 1.6;
      const lineGeo = new THREE.PlaneGeometry(lineWidth, 0.04);
      const lineMat = new THREE.MeshBasicMaterial({
        color: i % 3 === 0 ? 0xf97316 : 0x6b7280,
        transparent: true,
        opacity: 0.25 + Math.random() * 0.3,
      
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
      const line = new THREE.Mesh(lineGeo, lineMat);
      line.position.set(-1.1 + lineWidth / 2, 0.6 - i * 0.18, 0.05);
      monitorGroup.add(line);
    }

    // Stand
    const neckGeo = new THREE.BoxGeometry(0.12, 0.5, 0.08);
    const neckMat = new THREE.MeshBasicMaterial({ color: 0x1a1d21 
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
    const neck = new THREE.Mesh(neckGeo, neckMat);
    neck.position.set(0, -1.15, 0);
    monitorGroup.add(neck);

    const baseGeo = new THREE.BoxGeometry(1.0, 0.06, 0.5);
    const baseMat = new THREE.MeshBasicMaterial({ color: 0x1a1d21 
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.set(0, -1.43, 0);
    monitorGroup.add(base);

    const baseWire = new THREE.LineSegments(
      new THREE.EdgesGeometry(baseGeo),
      new THREE.LineBasicMaterial({ color: 0xf97316, transparent: true, opacity: 0.3 })
    );
    baseWire.position.copy(base.position);
    monitorGroup.add(baseWire);

    monitorGroup.position.set(0, 0.3, 0);
    monitorGroup.rotation.set(0.05, -0.3, 0);
    scene.add(monitorGroup);

    // --- Floating particles ---
    const particlesCount = 80;
    const particlesGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: 0xf97316, size: 0.02, transparent: true, opacity: 0.5,
    
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

    // --- Mouse interaction (subtle follow) ---
    let mouseX = 0, mouseY = 0;
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});

    // --- Animation loop ---
    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Gentle float + mouse follow
      monitorGroup.position.y = 0.3 + Math.sin(t * 0.8) * 0.08;
      monitorGroup.rotation.y = -0.3 + Math.sin(t * 0.5) * 0.06 + mouseX * 0.1;
      monitorGroup.rotation.x = 0.05 + Math.cos(t * 0.6) * 0.03 + mouseY * -0.05;

      particles.rotation.y = t * 0.05;
      particles.rotation.x = t * 0.02;

      renderer.render(scene, camera);
    }
    animate();

    // --- Resize ---
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);
  }

  /* --------------------------------------------------------
     12. SMOOTH SCROLL FOR ANCHOR LINKS
     -------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' 
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
      }
    
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
  
  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});


  /* --------------------------------------------------------
     13. WHIS TERMINAL ANIMATION
     -------------------------------------------------------- */
  const whisLogs = document.getElementById("whis-logs");
  if (whisLogs) {
    const logs = [
      { text: "> Initializing SystemAgent...", color: "var(--muted)", delay: 500 },
      { text: "> Loading Llama 3.1 local weights [4.7GB]...", color: "var(--muted)", delay: 800 },
      { text: "> [Router] System online. Listening on port 8080.", color: "var(--bone)", delay: 600 },
      { text: "User: \"Summarize the active docker containers.\"", color: "var(--bone)", delay: 1500 },
      { text: "> [Router] Intent recognized. Dispatching to SystemAgent.", color: "var(--muted)", delay: 500 },
      { text: "> [SystemAgent] Executing `docker ps --format '{{.Names}}'`", color: "var(--muted)", delay: 600 },
      { text: "> [SystemAgent] 3 active containers found.", color: "var(--muted)", delay: 800 },
      { text: "WHIS: \"You currently have 3 active containers running: postgres-db, redis-cache, and nginx-proxy.\"", color: "var(--ember)", delay: 1000, type: true }
    ];

    let currentLog = 0;
    
    function appendNextLog() {
      if (currentLog >= logs.length) return;
      
      const logData = logs[currentLog];
      const div = document.createElement("div");
      div.style.color = logData.color;
      div.style.opacity = "0";
      div.style.transform = "translateY(10px)";
      div.style.transition = "all 0.3s ease";
      
      if (logData.type) {
        whisLogs.appendChild(div);
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        let charIdx = 0;
        function typeChar() {
          if (charIdx < logData.text.length) {
            div.textContent = logData.text.substring(0, charIdx + 1) + "█";
            charIdx++;
            setTimeout(typeChar, 25);
          } else {
            div.textContent = logData.text; 
            setTimeout(resetAnimation, 6000); 
          }
        }
        typeChar();
      } else {
        div.textContent = logData.text;
        whisLogs.appendChild(div);
        
        void div.offsetWidth;
        div.style.opacity = "1";
        div.style.transform = "translateY(0)";
        
        currentLog++;
        setTimeout(appendNextLog, logData.delay);
      }
    }
    
    function resetAnimation() {
      whisLogs.innerHTML = "";
      currentLog = 0;
      setTimeout(appendNextLog, 500);
    }
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        resetAnimation();
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(whisLogs);
  }

});
