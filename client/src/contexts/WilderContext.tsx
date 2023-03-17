import { createContext, useContext, useEffect, useState } from "react";
import IWilder from "../interface/IWilder";
import { getWilder } from "../wildersData";

interface WildersContextProps {
  wildersData: IWilder[];
  fetchData: () => void | Promise<void>;
}

export const WildersContext = createContext<WildersContextProps>({
  wildersData: [],
  fetchData: () => {},
});

interface WildersProviderProps {
  children?: React.ReactNode;
}

export const WildersProvider: React.FC<WildersProviderProps> = ({
  children,
}: WildersProviderProps) => {
  const [wildersData, setWildersData] = useState<IWilder[]>([]);

  const fetchData = async (): Promise<void> => {
    const result = await getWilder();
    setWildersData(result.data);
  };

  useEffect(() => {
    void fetchData();
  }, []);

  return (
    <WildersContext.Provider value={{ wildersData, fetchData }}>
      {children}
    </WildersContext.Provider>
  );
};

export const useWilders = (): void => {
  useContext(WildersContext);
};
