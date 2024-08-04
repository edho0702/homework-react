export const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat("ko-KR", {
        style: "currency",
        currency: "KRW",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    // 1원 단위까지 정확하게 표시하기 위해 소수점 이하를 제거합니다.
    const roundedAmount = Math.floor(amount);

    return formatter.format(roundedAmount);
};
