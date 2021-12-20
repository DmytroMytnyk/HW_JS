const COOKIE = (() => { 
  const getCookie = (name) => {
    for (const pair of document.cookie.split(';')) {
      const match = `${name}=`;
      
      if (pair.trim().startsWith(match)) {
        return pair.trim().slice(match.length);
      }
    }

    return null;
  };

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