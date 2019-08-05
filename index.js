$(function() {
  function numberRandom(max, min) {
    var num = ( Math.random() * ( max - min ) + min ).toFixed( 2 )
    return num;
  }

  let tree = document.querySelector('.tree');
  for (let branckMainIndex = 0; branckMainIndex < 40; branckMainIndex ++) {
    let branchMain = document.createElement('div');
    branchMain.className = 'branch-left';
    branchMain.style = 'bottom: ' + (branckMainIndex * 0.5) + 'vw';
    if (branckMainIndex % 3 == 0) {
      branchMain.className = 'branch-right';
    }
    tree.append(branchMain);
  }

  let leafs = document.querySelector('.leafs');
  let land = document.querySelector('.land');
  for (let leafIndex = 0; leafIndex < 500; leafIndex ++) {
    let leaf = document.createElement('div');
    leaf.className = 'leaf';
    if (leafIndex < 100) {
      leaf.style = 'bottom: ' + numberRandom(41, 15) + 'vw; left: ' + numberRandom(3, -1) + 'vw; transform: rotate(' + numberRandom(90, 1) + 'deg)';
    } else if (leafIndex < 400) {
      leaf.style = 'bottom: ' + numberRandom(45, 15) + 'vw; left: ' + numberRandom(12, 3) + 'vw; transform: rotate(' + numberRandom(90, 1) + 'deg)';
    } else {
      leaf.style = 'bottom: ' + numberRandom(41, 15) + 'vw; left: ' + numberRandom(16, 12) + 'vw; transform: rotate(' + numberRandom(90, 1) + 'deg)';
    }
    leafs.append(leaf);

    landLeaf = document.createElement('div');
    landLeaf.className = 'leaf';
    landLeaf.style = 'bottom: ' + numberRandom(2, 1) + 'vw; left: ' + numberRandom(100, 0) + 'vw; transform: rotate(' + numberRandom(90, 1) + 'deg)';
    land.append(landLeaf);
  }
})
