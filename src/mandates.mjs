export function prepare(state, input) {
  const company = input.company ?? 'CO-A'; const draft = input.draft ?? 'DR-A';
  if (!state.mandates[company]?.includes('filing')) throw new Error('企业尚未委托报送');
  return { company, draft };
}
