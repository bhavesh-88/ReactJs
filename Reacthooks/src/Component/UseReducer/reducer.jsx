
// it will take two arg always
const reducer = (count, action) => {
    if (action.type === "INC") {
        return (count = count + 1)
    }
    if (action.type === "DEC") {
        // return (count = count - 1)
        let newNum = 0;
        count >= 1 ? (newNum = count - 1) : (newNum = 0);
        return newNum;
    }

    // switch (action.type) {
    //     case "INC":
    //       return (count += 1);
    //     case "DEC":
    //       let newCount = 0;
    //       count >= 1 ? (newCount = count - 1) : (newCount = 0);
    //       return newCount;
    //     default:
    //       return count;
    //   }

  return count
}

export default reducer
