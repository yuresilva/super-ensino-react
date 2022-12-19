import React, { useState, useContext } from "react";
import { Category } from "../components/Category";
import styles from "./Home.module.css";
import { AppContext } from "../Context/Index";

export function Home() {
  const { state } = useContext(AppContext);
  return (
    <div className="App">
      <h2>Acentuação Gráfica</h2>
      <span></span>
      <div>
        <main>
          <div className="container">
            <section className="info">
              {state.data.map((item, index) => (
                <div key={item.id}>
                  <Category materia={item.materia} />
                </div>
              ))}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
