type TypeOfObj<T> = {
  [k in keyof T]?: T[k];
};

type MapperType = {
  [k: string]: any;
};

type BreadCrumbItem = {
  title: string;
  url: string;
};
