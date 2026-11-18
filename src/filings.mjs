export function present(state) {
  return { filings: Object.entries(state.drafts).map(([draft, item]) => ({ draft, owner: item.owner, context: item.context, materials: item.attachments.length, receipt: item.receipt, complete: Boolean(item.receipt) })) };
}

export function assess(state, request, data) {
  const ids = new Set();
  for (const attachment of data.attachments) { if (!attachment.id || ids.has(attachment.id) || attachment.owner !== request.company) throw new Error('草稿资料归属不完整'); ids.add(attachment.id); }
  const existing = state.drafts[data.draft];
  if (existing && existing.owner !== request.company) throw new Error('草稿已经属于其他企业');
  return { owner: request.company, draft: data.draft, received: Boolean(data.receipt), materialCount: ids.size };
}
