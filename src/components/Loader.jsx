import { Html, useProgress } from "@react-three/drei";
import { useTranslation } from 'react-i18next';

const Loader = () => {
  const { progress } = useProgress();
  const { t } = useTranslation();
  return (
    <Html center className="text-xl font-normal text-center">
      {t('loader.loaded', { progress: Math.round(progress) })}
    </Html>
  );
};

export default Loader;
