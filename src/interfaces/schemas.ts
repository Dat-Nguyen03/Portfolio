import * as Yup from "yup";

export const projectSchema = Yup.object({
  title: Yup.string().required("Không được để trống"),
  imgUrl: Yup.mixed().required("Không được để trống"),
  category: Yup.string().oneOf(["Web Design", "Ux"], "Hãy chọn 1 trường!"),
  description: Yup.string()
    .min(20, "Phải nhiều hơn 20 ký tự")
    .required("Không được để trống"),
  techA: Yup.string(),
  techB: Yup.string(),
  techC: Yup.string(),
  techD: Yup.string(),
  siteUrl: Yup.string().required("Không được để trống"),
});

export type ProjectForm = Yup.InferType<typeof projectSchema>;

export const serviceShema = Yup.object({
  title: Yup.string().required("Không được để trống"),
  content: Yup.string()
    .min(10, "Phải nhiều hơn 10 ký tự")
    .required("Không được để trống"),
  image: Yup.mixed().required("Không được để trống"),
  startSide: Yup.string().oneOf(["start", "end"], "Hãy chọn 1 trường!"),
});

export type ServiceForm = Yup.InferType<typeof serviceShema>;

export const settingSchema = Yup.object({
  title: Yup.string()
    .min(10, "Tối thiểu 10 ký tự")
    .required("Không được để trống!"),
  logoTitle: Yup.string()
    .min(1, "Tối thiểu 1 ký tự")
    .max(1, "Tối đa 1 ký tự")
    .required("Không được để trống!"),
  bigTitle: Yup.string().required("Không được để trống!"),
  smallTitle: Yup.string().required("Không được để trống!"),
  description: Yup.string()
    .min(20, "Tối thiểu 20 ký tự")
    .required("Không được để trống!"),
});

export type SettingForm = Yup.InferType<typeof settingSchema>;

export const aboutSchema = Yup.object({
  subIntro: Yup.string().required("Không được để trống!"),
  introText: Yup.string().min(10).required("Không được để trống!"),
  description: Yup.string().min(20).required("Không được để trống!"),
  image: Yup.mixed().required("Không được để trống!"),
});

export type AboutForm = Yup.InferType<typeof aboutSchema>;
