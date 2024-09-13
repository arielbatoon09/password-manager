import { useNavigate as ReactNav } from "react-router-dom";

export const useNavigate = () => {
  const navigate = ReactNav();

  const goToPage = (path: string) => {
    navigate(path);
  };

  return { goToPage };
};