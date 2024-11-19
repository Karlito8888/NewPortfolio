import { useEffect, useState } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

const PWAUpdateHandler = () => {
  const [showUpdateAlert, setShowUpdateAlert] = useState(false);
  
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(registration) {
      // Vérifier les mises à jour toutes les heures
      setInterval(() => {
        registration?.update();
      }, 60 * 60 * 1000);
    },
    onRegisterError(error) {
      console.error('SW registration error', error);
    },
  });

  useEffect(() => {
    setShowUpdateAlert(needRefresh);
  }, [needRefresh]);

  const handleUpdate = () => {
    updateServiceWorker(true);
    setShowUpdateAlert(false);
  };

  if (!showUpdateAlert) return null;

  return (
    <div className="pwa-update-alert">
      <p>Une nouvelle version est disponible !</p>
      <button onClick={handleUpdate}>Mettre à jour</button>
    </div>
  );
};

export default PWAUpdateHandler;
