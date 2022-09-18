export const filter = (data: any[], options: string, flag: string): any[] => {
  const filtred = data.filter(item => {
    return item[flag].toLowerCase().includes(options.toLowerCase());
  })
  return filtred;
}
