import Link from "next/link";
import styles from "./categories.module.css";
import Hatchback from "@/public/icons/Hatchback";
import Sedan from "@/public/icons/Sedan";
import Sport from "@/public/icons/Sport";
import Suv from "@/public/icons/Suv";
import React from "react";

const Categories = () => {
  return (
    <React.Fragment>
      <div
        className={`flex justify-center items-center gap-4 font-semibold  ${styles.aTagsContainer}`}
      >
        <Link href="/sedan">
          Sedan
          <Sedan />
        </Link>
        <Link href="/suv">
          SUV
          <Suv />
        </Link>
        <Link href="/hatchback">
          Hatchback
          <Hatchback />
        </Link>
        <Link href="/sport">
          Sport
          <Sport />
        </Link>
      </div>
    </React.Fragment>
  );
};
export default Categories;
