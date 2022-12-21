import React, { useState, useContext } from "react";
import { Category } from "../components/Category";
import styles from "./Home.module.css";
import { AppContext } from "../Context/Index";

export function Home() {
  const { state } = useContext(AppContext);
  return (
    <div className="App">
      <h2>Cursos</h2>
      <span></span>
      <div>
        <main>
          <div className="container">
            <section className="info">
              {state.data.map((item, index) => (
                <div key={index}>
                  <Category key={index} materia={item.materia} />
                </div>
              ))}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
