export function present(state) {
  return { filings: Object.entries(state.drafts).map(([draft, item]) => ({ draft, owner: item.owner, context: item.context, materials: item.attachments.length, receipt: item.receipt, complete: Boolean(item.receipt) })) };
}
