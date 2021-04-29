export const retry = (count, timer) => {
  const rescount = count;
  const restimer = timer;
  return {
    name: 'retry',
    next: (next) => {
      let i = 0;
      const promise = new Promise((resolve) => {
        const retryStack = async () => {
          let value;
          try {
            value = await next();
          } catch (e) {
            i += 1;
            if (i < rescount) {
              return setTimeout(() => retryStack(next), restimer);
            }
            return resolve({ error: e });
          }

          return resolve(value);
        };
        retryStack(next);
      });

      return promise;
    },
  };
};

export const catchError = (cbFn) => ({
  name: 'catchError',
  next: (value) => {
    cbFn(value);
    return null;
  },
});
