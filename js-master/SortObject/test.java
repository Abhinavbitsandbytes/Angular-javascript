class Solution {
    Node flatten(Node root) {
        if(root==null || root.next==null){
            return root;
        }
        Node mh = flatten(root.next);
        return merge(mh,root);
    }
        public static Node merge(Node left, Node right){
        Node ansH=null;
        Node ansT=null;
        while(left!=null && right!=null){
            if(left.data<right.data){
                if(ansH == null){
                    ansH=left;
                    ansT=left;
                } else{
                    ansT.bottom=left;
                    ansT=ansT.bottom;
                }
                left=left.bottom;
            } else{
                if(ansH==null){
                    ansH=right;
                    ansT=right;
                } else{
                    ansT.bottom=right;
                    ansT=ansT.bottom;
                }
                right=right.bottom;
            } 
        }
        if(left!=null){
            ansT.bottom=left;
        } else{
            ansT.bottom=right;
        }
        return ansH; 
    }
}