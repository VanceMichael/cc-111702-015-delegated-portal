export function accept(state, request, data) {
  if (data.company !== request.company || data.owner !== request.company || data.draft !== request.draft) throw new Error('草稿所属企业不符');
  if (data.attachments.some(item => item.owner !== request.company)) throw new Error('材料所属企业不符');
  state.contexts[data.context] = { company: data.company, delegation: data.delegation };
  state.drafts[data.draft] = { owner: data.owner, attachments: data.attachments, context: data.context, receipt: data.receipt };
  return data.draft;
}
