const middlewareInterlock = () => {
  let middleware = {};
  let prePipeline = (action, next) => {
    switch (action) {
      default:
        return next(action);
    }
  };
  return {
    createMiddleware({ preMiddleware = prePipeline, combineMiddleware = middleware }) {
      middleware = combineMiddleware;
      prePipeline = preMiddleware;
    },
    dispatch(action) {
      const needNext = (payload) => payload;
      const result = prePipeline(action, needNext);
      const next = (a) => middleware[a.type](a);

      return {
        data: next(result),
        async pipe(...fns) {
          const fnQueue = fns;
          const pipeFn = async (queue, nextValue) => {
            let payload;
            try {
              payload = await nextValue;
            } catch (e) {
              if (fnQueue.length && fnQueue[0].name === 'retry') {
                payload = () => next(result);
              } else {
                payload = { error: e };
              }
            }

            const currentFn = queue[0];
            queue.shift();

            if (!payload.error && queue.length && queue[0].name === 'catchError') {
              return payload;
            }

            const hasNext = queue.length > 0;
            const data = await currentFn.next(payload);

            return hasNext ? pipeFn(queue, data) : data;
          };

          const resultData = await this.data;

          return pipeFn(fnQueue, resultData);
        },
      };
    },
  };
};

export default middlewareInterlock;
