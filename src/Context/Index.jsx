import { createContext } from "react";

export const INITIAL_STATE = {
  data: [
    {
      "id": 1,
      "materia": "Português",
      "list": [
        {
          "id": 1,
          "exerciceo": "exerciceo 1",
          "question1": "I- Queria saber o por quê dessa confusão?",
          "question2": "II- Queria saber porque falta na aula?",
          "question3": "III- Acordo cedo porque gosto de estudar?",
          "question": "Com relação ao uso dos porquês, então corretas",
          "correct": ["II e III", "Apenas I", "II e III", " Apenas III"],
        },
        {
          "id": 2,
          "exerciceo": "exerciceo 2",
          "question1": "I- O menino achou a bola debaixo da cama.",
          "question2": "II- O menino achou a bola debaixo da cadeira.",
          "question3": "III- O menino achou a bola debaixo da mesa.",
          "question": "Que frase está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 3,
          "exerciceo": "exerciceo 3",
          "question1": "I- O gato comeu a ração do cachorro.",
          "question2": "II- O gato comeu a ração do gato.",
          "question3": "III- O cachorro comeu a ração do gato.",
          "question": "Que frase está incorreta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 4,
          "exerciceo": "exerciceo 4",
          "question1": "I- A criança está brincando na praia.",
          "question2": "II- A criança está brincando na piscina.",
          "question3": "III- A criança está brincando no parque.",
          "question": "Que frase está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 5,
          "exerciceo": "exerciceo 5",
          "question1": "I- O avião decolou às 14h.",
          "question2": "II- O avião decolou às 15h.",
          "question3": "III- O avião decolou às 16h.",
          "question": "Que frase está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 6,
          "exerciceo": "exerciceo 6",
          "question1": "I- A sra. Maria comprou frutas na feira.",
          "question2": "II- A sra. Maria comprou frutas no mercado.",
          "question3": "III- A sra. Maria comprou frutas na padaria.",
          "question": "Que frase está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 7,
          "exerciceo": "exerciceo 7",
          "question1": "I- O livro está na estante.",
          "question2": "II- O livro está na mesa.",
          "question3": "III- O livro está no chão.",
          "question": "Que frase está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 8,
          "exerciceo": "exerciceo 8",
          "question1": "I- O avião decolou às 14h.",
          "question2": "II- O avião decolou às 13h.",
          "question3": "III- O avião decolou às 15h.",
          "question": "Que frase está incorreta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 9,
          "exerciceo": "exerciceo 9",
          "question1": "I- O sol nasce a oeste.",
          "question2": "II- O sol nasce a leste.",
          "question3": "III- O sol nasce a sul.",
          "question": "Que frase está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 10,
          "exerciceo": "exerciceo 10",
          "question1": "I- O caminhão saiu às 14h.",
          "question2": "II- O caminhão saiu às 13h.",
          "question3": "III- O caminhão saiu às 15h.",
          "question": "Que frase está incorreta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 11,
          "exerciceo": "exerciceo 11",
          "question1": "I- A lua nasce a oeste.",
          "question2": "II- A lua nasce a leste.",
          "question3": "III- A lua nasce a sul.",
          "question": "Que frase está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 12,
          "exerciceo": "exerciceo 12",
          "question1": "I- O cão está no quintal.",
          "question2": "II- O cão está no jardim.",
          "question3": "III- O cão está no parque.",
          "question": "Que frase está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
      ],
    },
    {
      "id": 2,
      "materia": "Matemática",
      "list": [
        {
          "id": 1,
          "exerciceo": "exerciceo 1",
          "question1": "I- Qual o resultado da operação 4 + 3?",
          "question2": "II- Qual o resultado da operação 8 - 5?",
          "question3": "III- Qual o resultado da operação 7 * 2?",
          "question": "Qual das seguintes operações está correta?",
          "correct": ["II e III", "Apenas I", "II e III, Apenas III"],
        },
        {
          "id": 2,
          "exerciceo": "exerciceo 2",
          "question1": "I- A soma de 4 e 3 é igual a 7.",
          "question2": "II- A soma de 4 e 3 é igual a 6.",
          "question3": "III- A soma de 4 e 3 é igual a 8.",
          "question": " Qual das seguintes operações está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 3,
          "exerciceo": "exerciceo 3",
          "question1": "I- O resultado da divisão de 15 por 3 é igual a 5.",
          "question2": "II- O resultado da divisão de 15 por 3 é igual a 6.",
          "question3": "III- O resultado da divisão de 15 por 3 é igual a 4.",
          "question": "Que frase está incorreta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 4,
          "exerciceo": "exerciceo 4",
          "question1": "I- O quadrado de 5 é igual a 25.",
          "question2": "II- O quadrado de 5 é igual a 24.",
          "question3": "III- O quadrado de 5 é igual a 23.",
          "question": " Qual das seguintes operações está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 5,
          "exerciceo": "exerciceo 5",
          "question1": "I- O resultado da raiz quadrada de 64 é igual a 8.",
          "question2": "II- O resultado da raiz quadrada de 64 é igual a 9.",
          "question3": "III- O resultado da raiz quadrada de 64 é igual a ",
          "question": " Qual das seguintes operações está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 6,
          "question1": "I- O resultado da raiz cúbica de 27 é igual a 3.",
          "question2": "II- O resultado da raiz cúbica de 551 é igual a 4.",
          "question3": "III- O resultado da raiz cúbica de 32 é igual a 5.",
          "question": " Qual das seguintes operações está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 7,
          "exerciceo": "exerciceo 7",
          "question1": "I- O resultado da raiz cúbica de 88 é igual a 3.",
          "question2": "II- O resultado da raiz cúbica de 27 é igual a 2.",
          "question3": "III- O resultado da raiz cúbica de 1 é igual a 1.",
          "question": " Qual das seguintes operações está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 8,
          "exerciceo": "exerciceo 8",
          "question1": "I- O resultado da raiz cúbica de 6 é igual a 6.",
          "question2": "II- O resultado da raiz cúbica de 88 é igual a 7.",
          "question3": "III- O resultado da raiz cúbica de 1 é igual a 8.",
          "question": "Que frase está incorreta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 9,
          exerciceo: "exerciceo 9",
          "question1": "I- O resultado da raiz cúbica de 1 é igual a 9.",
          "question2": "II- O resultado da raiz cúbica de 223 é igual a 10.",
          "question3": "III- O resultado da raiz cúbica de 31 é igual a 11.",
          "question": " Qual das seguintes operações está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 10,
          "exerciceo": "exerciceo 10",
          "question1": "I- O resultado da raiz cúbica de 432 é igual a 12.",
          "question2": "II- O resultado da raiz cúbica de 987 é igual a 13.",
          "question3": "III- O resultado da raiz cúbica de 89 é igual a 14.",
          "question": "Que frase está incorreta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 11,
          "exerciceo": "exerciceo 11",
          "question1": "I- O resultado da raiz cúbica de 42 é igual a 15.",
          "question2": "II- O resultado da raiz cúbica de 77 é igual a 41.",
          "question3": "III- O resultado da raiz cúbica de 13 é igual a 17.",
          "question": " Qual das seguintes operações está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 12,
          "exerciceo": "exerciceo 11",
          "question1": "I- O resultado da raiz cúbica de 27 é igual a 3.",
          "question2": "II- O resultado da raiz cúbica de 551 é igual a 4.",
          "question3": "III- O resultado da raiz cúbica de 32 é igual a 5.",
          "question": " Qual das seguintes operações está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
      ],
    },
    {
      "id": 1,
      "materia": "Ciência da Computação",
      "list": [
        {
          "id": 1,
          "exerciceo": "exerciceo 1",
          "question1":
            "I- Qual é a linguagem de programação mais utilizada para desenvolver aplicativos para dispositivos móveis?",
          "question2":
            "II- Qual é a linguagem de programação mais utilizada para criar páginas da web?",
          "question3":
            "III- Qual é a linguagem de programação mais utilizada para criar jogos?",
          "question": "Com relação ao uso dos porquês, então corretas",
          "correct": ["II e III", "Apenas I", "II e III, Apenas III"],
        },
        {
          "id": 2,
          "exerciceo": "exerciceo 2",
          "question1":
            "I- O sistema operacional Windows é desenvolvido pela empresa Apple.",
          "question2":
            "II- O sistema operacional Windows é desenvolvido pela empresa Microsoft.",
          "question3":
            "III- O sistema operacional Windows é desenvolvido pela empresa Google.",
          "question": "Qual das seguintes operações está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 3,
          "exerciceo": "exerciceo 3",
          "question1":
            "I- O processador Intel Core i3 é mais potente que o processador AMD Ryzen 3.",
          "question2":
            "II- O processador Intel Core i3 é menos potente que o processador AMD Ryzen 3.",
          "question3":
            "III- O processador Intel Core i3 e o processador AMD Ryzen 3 têm a mesma potência.",
          "question": "Qual das seguintes operações está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 4,
          "exerciceo": "exerciceo 4",
          "question1":
            "I- A memória RAM é responsável pelo armazenamento de dados no computador.",
          "question2":
            "II- A memória RAM é responsável pelo processamento de dados no computador.",
          "question3":
            "III- A memória RAM é responsável pela comunicação entre os componentes do computador.",
          "question": "Qual das seguintes operações está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 5,
          "exerciceo": "exerciceo 5",
          "question1": "I- O que é uma rede de computadores?",
          "question2": "II- O que é um router?",
          "question3": "III- O que é um switch?",
          "question": "Qual das seguintes operações está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 6,
          "exerciceo": "exerciceo 6",
          "question1": "I- O que é uma base de dados?",
          "question2": "II- O que é um índice?",
          "question3": "III- O que é uma chave primária?",
          "question": "Qual das seguintes operações está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 7,
          "exerciceo": "exerciceo 7",
          "question1":
            "I- O que é um sistema de gerenciamento de banco de dados?",
          "question2": "II- O que é uma consulta SQL?",
          "question3": "III- O que é um trigger?",
          "question": "Qual das seguintes definições está correta?",
          "question": "Qual das seguintes operações está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 8,
          "exerciceo": "exerciceo 8",
          "question1": "I- O que é um sistema distribuído?",
          "question2": "II- O que é uma arquitetura cliente-servidor?",
          "question3": "III- O que é uma nuvem pública?",
          "question": "Qual das seguintes operações está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 9,
          "exerciceo": "exerciceo 9",
          "question1":
            "I- A memória RAM é responsável pelo armazenamento de dados no computador.",
          "question2":
            "II- A memória RAM é responsável pelo processamento de dados no computador.",
          "question3":
            "III- A memória RAM é responsável pela comunicação entre os componentes do computador.",
          "question": "Qual das seguintes operações está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 10,
          "exerciceo": "exerciceo 10",
          "question1":
            "I- A memória RAM é responsável pelo armazenamento de dados no computador.",
          "question2":
            "II- A memória RAM é responsável pelo processamento de dados no computador.",
          "question3":
            "III- A memória RAM é responsável pela comunicação entre os componentes do computador.",
          "question": "Qual das seguintes operações está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 11,
          "exerciceo": "exerciceo 11",
          "question1":
            "I- O processador Intel Core i3 é mais potente que o processador AMD Ryzen 3.",
          "question2":
            "II- O processador Intel Core i3 é menos potente que o processador AMD Ryzen 3.",
          "question3":
            "III- O processador Intel Core i3 e o processador AMD Ryzen 3 têm a mesma potência.",
          "question": "Qual das seguintes operações está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
        {
          "id": 12,
          "exerciceo": "exerciceo 12",
          "question1": "I- O que é uma base de dados?",
          "question2": "II- O que é um índice?",
          "question3": "III- O que é uma chave primária?",
          "question": "Qual das seguintes operações está correta?",
          "correct": ["I e II", "Apenas II", "III e II", "Apenas I"],
        },
      ],
    },
  ],
};

export const AppContext = createContext({
  state: INITIAL_STATE,
});
