doc_term_mat = {}
for(ti in inv_idx_dic){
	for(doc_id in inv_idx_dic[ti][1]){
		doc_term_mat[doc_id,ti] = inv_idx_dic[ti][0] * inv_idx_dic[ti][1][doc_id];
	}
}
