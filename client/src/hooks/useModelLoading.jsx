import { useProgress } from '@react-three/drei';

export const useModelLoading = () => {
  const { active, progress } = useProgress();
  return { isLoading: active, progress };
};
