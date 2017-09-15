%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%                     Black Box Fast Multipole Method
%             Written for C++ by    : Sivaram Ambikasaran, Ruoxi Wang
%             Written for Matlab by : Fahd Siddiqui and Ali Rezaei                             
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function assign_Siblings( node )
% Assign siblings to children of a the node

%% Assign siblings to child # 1
node.child(1,1).neighbor(4,1) = node.child(2,1);
node.child(1,1).neighbor(6,1) = node.child(3,1);
node.child(1,1).neighbor(5,1) =	node.child(4,1);

%% Assign siblings to child # 2
node.child(2,1).neighbor(8,1) =	node.child(1,1);
node.child(2,1).neighbor(7,1) =	node.child(3,1);
node.child(2,1).neighbor(6,1) =	node.child(4,1);

%% Assign siblings to child # 3
node.child(3,1).neighbor(2,1) =	node.child(1,1);
node.child(3,1).neighbor(3,1) =	node.child(2,1);
node.child(3,1).neighbor(4,1) =	node.child(4,1);

%% Assign siblings to child # 4
node.child(4,1).neighbor(1,1) =	node.child(1,1);
node.child(4,1).neighbor(2,1) =	node.child(2,1);
node.child(4,1).neighbor(8,1) =	node.child(3,1);

%% Update neighbor count
for k=1:4
    node.child(k).nNeighbor = node.child(k).nNeighbor + 3;
end
end

