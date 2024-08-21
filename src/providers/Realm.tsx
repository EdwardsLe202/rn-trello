import { RealmProvider } from "@realm/react";
import { PropsWithChildren, ReactNode } from "react";
import { Task } from "../models/Task";
interface RealmCustomProviderProps {
  children: ReactNode;
}

export default function RealmCustomProvider({ children }: PropsWithChildren<RealmCustomProviderProps>) {
  return <RealmProvider schema={[Task]}>{children}</RealmProvider>;
}