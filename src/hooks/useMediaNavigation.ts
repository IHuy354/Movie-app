import { useNavigate } from "react-router-dom";

export const useMediaNavigation = () => {
  const navigate = useNavigate();

  const goToDetail = (mediaType: string, id: number) => {
    navigate(`/${mediaType}/${id}`);
  };

  return { goToDetail };
};
