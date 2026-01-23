import { useNavigate } from "react-router-dom";

export const useMediaNavigation = () => {
  const navigate = useNavigate();

  const goToDetail = (mediaType: string, id: number) => {
    navigate(`/${mediaType}/${id}`);
  };
    const goToSearch = (mediaType: string, keyword: string) => {
    navigate(`/${mediaType}?search=${keyword}`);
  };

  return { goToDetail, goToSearch };
};
