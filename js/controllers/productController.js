mainApp.controller("productController",function($scope,productData, $filter,$state){
	$scope.productData = productData;
	$scope.orderType = "num";
	$scope.order = "";
	$scope.changeOrder = function(type){
		$scope.orderType = type;
		if($scope.order === ""){
			$scope.order ="-";
		}else{
			$scope.order ="";
		}
	};
	
	
	
	
	
	//分页
	//初始化页面
//	$scope.refreshPage = function(data){
//		$scope.count = data.length;				
//		$scope.pages = Math.ceil($scope.count / $scope.pageSize);//总页数
//		$scope.showPages = $scope.pages > 5 ? 5: $scope.pages;
//		$scope.pageList =[];//页码
//		$scope.currentPage = 1;
//		$scope.dataList = data.slice(0,$scope.pageSize);
//		
//		
//		
//		//表格数据
//		$scope.setData = function(){
//			$scope.dataList = data.slice($scope.pageSize*($scope.currentPage - 1),($scope.pageSize*$scope.currentPage));			
//		};
//		
//						
//		//分页数组
//		for(var i = 0; i < $scope.showPages; i++){
//			$scope.pageList.push(i+1);
//		};
//				
//		
//		//选择页码
//		$scope.selectPage = function(page){
//			if(page < 1 || page > $scope.pages) return;
//			if(page > 2){
//				var newpageList = [];
//				for (var i = (page - 3) ; i < ((page + 2) > $scope.pages ? $scope.pages : (page + 2)) ; i++) {
//				newpageList.push(i + 1);
//				}
//				$scope.pageList = newpageList;
//			}
//			
//			$scope.currentPage = page;
//			$scope.setData();
//			$scope.isActivePage(page);
//			
//		}
//		
//	}

	
	
//	$scope.selectedPageSize = function(data,n){
//		$scope.pageSize = n;
//		$scope.refreshPage(data);
//	}
	
	
	
	
	//选中样式
	//页码
//	$scope.isActivePage = function(page){
//		return $scope.currentPage == page;
//	};
//


	//选中样式
	//地址
	$scope.isActiveTag = function(name){
		return $state.includes(name);
	};
	
	








	var selectedModel = null;
	var selectedFuel = null;
	var selectedCompany = null;
	
	$scope.pageSize = 10;
	$scope.selectedpage = 1;
	$scope.maxSize = 5;
    $scope.totalItems = 0;
    
    
	//下拉菜单		
    $scope.placement = {
        options: [5,10,20],                   
    };
	
	
	$scope.selectModel = function(newCategory){
		selectedModel = newCategory;
		$scope.selectedpage = 1;
	}
	$scope.selectFuel = function(newCategory){
		selectedFuel = newCategory;
		$scope.selectedpage = 1;
	}
	$scope.selectCompany = function(newCategory){
		selectedCompany = newCategory;
		$scope.selectedpage = 1;
	}
	$scope.selectPage = function(newPage){
		$scope.selectedpage = newPage;
	}
	$scope.pageIndex = function(){
		$scope.selectedpage = 1;
	}
	$scope.pagePre = function(){
		$scope.selectPage($scope.selectedpage - 1);
	};
	
	$scope.pageNext = function () {
		$scope.selectPage($scope.selectedpage + 1);
	};
	
//	$scope.p_last = function(){
//		$scope.selectPage($scope.pages);
//	};
//	
	
	$scope.modelFilterFn = function(product){
		return selectedModel == null ||
		 product.model == selectedModel;
	}

	$scope.fuelFilterFn = function(product){
		return selectedFuel == null ||
		 product.fuel == selectedFuel;
	}
	$scope.companyFilterFn = function(product){
		return selectedCompany == null ||
		 product.company == selectedCompany;
	}
	
	$scope.setPageSize = function(pagesize){
		$scope.pageSize = pagesize;
		$scope.selectedpage = 1;
	}
	
	
	$scope.getPageClass = function(page){
		return $scope.selectedpage == page; 
	}

	
	
    
     
    


})




