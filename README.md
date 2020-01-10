# nav-bar

Users are able to hover and click on links with a slider animation

## <strong>Key Features</strong>

---

- Users are able to hover and click on links with a slider animation

## <strong>**SOME CONCERNS**</strong>

- IT RESIZES CORRECTLY! BUT NEED TO FIGURE OUT HOW TO CORRECTLY ALIGN THE UNDERLINE ELEMENT WITH THE CITY NAMES
- <strong>SOME THOUGHTS ON THE APPROACH</strong>
  - NEED TO RETRIEVE THE CURRENT POSITIONS OF THE CITY NAMES AND CALCULATE THE MARGINLEFT PROPERTY
    FOR THE UNDERLINE ELEMENT AND ACCUMULATE AND KEEP TRACK OF THE MARGINLEFT AND POSITION AS USERS TRY TO
    CLICK ON OTHER CITY NAMES (ASSUMING THEY ARE CLICKING FROM LEFT TO RIGHT/VICE VERSA/OR RANDOMLY)
    - MAY CALCULATE THROUGH COMPONENTDIDUPDATE (CHECK COMMENTS TO SEE WHY)

---

## <strong>How to use</strong>

---

- Step 1.
  ```bash
      npm install
  ```
- Step 2.
  ```bash
      npm run build
      or
      npm run dev (to run in dev mode)
  ```
- Step 3. (skip this step if running in dev mode) Open index.html that is in the directory of: build/index.html
- Step 4. Interact
  - Hover over city names to see the color of the links changing to blue
  - Click on various city names to see an underline animation

## <strong>Author</strong>

Gerret Kubota
