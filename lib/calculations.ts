
export const getMBTI = ( answers : Record<number, number>): string => {
    const mbti: number[] = [0, 0, 0, 0];
    Object.entries(answers).forEach(([key, value]) => {
        const pageNo = (Number(key)) / 10 - 1;
        mbti[pageNo] += value;
    })

    let res = "";
    if(mbti[0] <= 0) res += "E";
    else res += "I";
    if(mbti[1] <= 0) res += "S";
    else res += "N";
    if(mbti[2] <= 0) res += "T";
    else res += "F";
    if(mbti[3] <= 0) res += "J";
    else res += "P";
    return res;
}
