$(document).ready(function(){

	grp1arr = [	'Set',
				'Set 1(FTE 230ml) - $1380', '4000000000001', '1380', 
				'Set 2(FTE 230ml + FTM 10pc) - $2260', '4000000000002', '2260',
				'Set 3 (FTE230ml + GAE 50ml) - $2910', '4000000000003', '2910'
			];
			
	grp2arr = [	'Hero (Core 5)',
				'FTE 230ml - $1380', '4000000000004', '1380', 
				'GAE 50ml - $2000', '4979006000005', '2000',
				'RNA Pwr 80g - $3000', '4979006000006', '3000',
				'RNA Ess 50ml - $4000', '4979006000006', '4000',
				'FTM 10pc - $5000', '4979006000006', '5000'
			];
	
	grp3arr = [	'Others',
				'Cleanser 120g - $410', '4000000000001', '410', 
				'Clear lotion - $410', '4000000000001', '500'
			];

   
	function setgrp(grpid, grparr){
		var arrcounter = 0;
		
		var grp = '<div class="panel panel-default"> <div class="panel-heading">' + grparr[arrcounter++] + '</div> <div class="panel-body"><div class="row">';
		
		for(i = 0; i < (grparr.length-1)/3; i++){	
			grp += '<div class="col-md-12 col-sm-6"> <div class="sc-product-item thumbnail"> <div class="caption"> <h4 data-name="product_name">' + grparr[arrcounter++];

			grp +='</h4><p data-name="product_desc" class="desc">' + grparr[arrcounter++] + '</p> <div> <div class="form-group2"><input name="product_price" value="';
			
			grp += grparr[arrcounter++] + '" type="hidden" /> <input name="product_id" value="12" type="hidden" /> <button class="sc-add-to-cart btn btn-success btn-sm pull-right">Add to cart</button><input class="sc-cart-item-qty pull-right" name="product_quantity" min="1" value="1" type="number"> </div> </div> <div class="clearfix"></div> </div> </div> </div>';
		}

		grp += '</div></div></div>';
		$(grpid).html(grp);
	}
	
	//setup group
   	setgrp('#gp1', grp1arr);
	setgrp('#gp2', grp2arr);
	setgrp('#gp3', grp3arr);
	
	//initiate cart
	$('#smartcart').smartCart();
});