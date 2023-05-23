export const useScreenshot = (page: any, context: any): any => {
  const screenShot = (fileName: string) => {
    const browserName = context.browser()?.browserType().name();

    return page.screenshot({
      path: `__screenshots__/${browserName}/${fileName}`,
      fullPage: true,
    });
  };

  return {
    screenShot,
  };
};