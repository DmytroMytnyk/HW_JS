const COOKIE = (() => {      
  const setCookie = (name, value, options = {}) => {
    let pair = name + '=' + value;

    for (const optionKey of Object.keys(options)) {
      pair += '; ' + optionKey + '=' + options[optionKey];
    }

    document.cookie = pair;
  };
 
  return {
    setCookie,
  };
})();