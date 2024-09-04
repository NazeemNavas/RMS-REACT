import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const RootComponent = () => {
  useEffect(() => {
    // Array of script and link elements to add
    const scriptSources = [
      {
        type: 'script',
        src: '../assets/js/core/libs.min.js',
      },
      {
        type: 'script',
        src: '../assets/js/app.js',
      },
      {
        type: 'script',
        src: '../assets/vendor/moment.min.js',
      }
    ];

    const linkSources = [
      {
        rel: 'stylesheet',
        href: '../assets/css/core/libs.min.css',
      },
      {
        rel: 'stylesheet',
        href: '../assets/css/aprycot.min.css?v=1.0.0',
      },
    ];

    // Append script elements to body
    const scripts = scriptSources.map(({ src }) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    });

    // Append link elements to head
    const links = linkSources.map(({ rel, href }) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      document.head.appendChild(link);
      return link;
    });

    // Cleanup function to remove scripts and links when component unmounts
    return () => {
      scripts.forEach(script => {
        if (script) document.body.removeChild(script);
      });

      links.forEach(link => {
        if (link) document.head.removeChild(link);
      });
    };
  }, []);

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
