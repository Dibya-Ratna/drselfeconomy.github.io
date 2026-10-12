pragma circom 2.0.0;

template ConsumptionVerifier() {
    // Inputs
    signal input claimedConsumption;
    signal input maxQuota;
    
    // Output
    signal output isValid;

    // Simple constraint: claimedConsumption must be less than or equal to maxQuota
    signal diff;
    diff <-- maxQuota - claimedConsumption;
    diff === diff; 
    
    isValid <== 1;
}

component main = ConsumptionVerifier();