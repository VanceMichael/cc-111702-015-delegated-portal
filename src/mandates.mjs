export function prepare(state, input) {
  const company = input.company ?? 'CO-A'; const draft = input.draft ?? 'DR-A';
  if (!state.mandates[company]?.includes('filing')) throw new Error('企业尚未委托报送');
  return { company, draft };
}

export function resolve(state, request, data) {
  if (data.company !== request.company || data.owner !== request.company || data.draft !== request.draft || !data.context) throw new Error('草稿企业上下文不符');
  if (!state.mandates[request.company]?.includes('filing')) throw new Error('企业委托已经失效');
  return data;
}
