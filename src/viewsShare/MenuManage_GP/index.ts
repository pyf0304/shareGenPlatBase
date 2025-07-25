const components = import.meta.glob('./*.vue', { eager: true });
console.log('components:in src/viewsShare/menuManage_GP/index', components);
const menuManage_GPMap = Object.entries(components).reduce((acc, [path, module]) => {
  // const name = path.replace("./components/", "").replace(".vue", "");
  const name = path.replace('./', '').replace('.vue', '');
  acc[name] = (module as { default: any }).default; // 类型断言
  return acc;
}, {} as Record<string, any>);
// 单独导出每个组件

// export const TeacherInfoCRUD = menuManage_GPMap['TeacherInfoCRUD'];

console.log('menuManage_GPMap:', menuManage_GPMap);

export { menuManage_GPMap };
