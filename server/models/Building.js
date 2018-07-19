module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'building',
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true
      },
      block: {
        type: DataTypes.STRING,
        field: 'block'
      },
      lot: {
        type: DataTypes.STRING,
        field: 'lot'
      },
      address: {
        type: DataTypes.STRING,
        field: 'address'
      },
      yearBuilt: {
        type: DataTypes.STRING,
        field: 'year_built'
      },
      geometry: {
        type: DataTypes.JSON,
        field: 'geometry'
      },
      census_tract_id: {
        type: DataTypes.INTEGER,
        field: 'census_tract_id'
      },
      neighborhood_id: {
        type: DataTypes.INTEGER,
        field: 'neighborhood_id'
      },
      totalViolations: {
        type: DataTypes.INTEGER,
        field: 'total_violations'
      },
      totalSales: {
        type: DataTypes.INTEGER,
        field: 'total_sales'
      },
      totalServiceCalls: {
        type: DataTypes.INTEGER,
        field: 'total_service_calls'
      },
      totalServiceCallsOpenOverMonth: {
        type: DataTypes.INTEGER,
        field: 'total_service_calls_open_over_month'
      }
    },
    {
      tableName: 'buildings'
    }
  )
}
