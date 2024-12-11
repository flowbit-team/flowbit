let globalNavigate: ReturnType<typeof import("react-router-dom").useNavigate>;

export const setGlobalNavigate = (navigate: typeof globalNavigate) => {
  globalNavigate = navigate;
};

export const navigateTo = (path: string) => {
  if (globalNavigate) {
    globalNavigate(path);
  } else {
    console.error("navigateTo was called before navigate was initialized");
  }
};
