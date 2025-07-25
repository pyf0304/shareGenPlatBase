const components = import.meta.glob('./*.vue', { eager: true });
console.log('components:in src/viewsShare/userManage_GP/index', components);
const userManage_GPMap = Object.entries(components).reduce((acc, [path, module]) => {
  // const name = path.replace("./components/", "").replace(".vue", "");
  const name = path.replace('./', '').replace('.vue', '');
  acc[name] = (module as { default: any }).default; // 类型断言
  return acc;
}, {} as Record<string, any>);
// 单独导出每个组件

// export const TeacherInfoCRUD = userManage_GPMap['TeacherInfoCRUD'];

console.log('userManage_GPMap:', userManage_GPMap);

export { userManage_GPMap };
